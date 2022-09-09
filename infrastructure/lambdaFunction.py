import json
import boto3

dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):

    DynamoDBTableName = "hoppers-table"
    response = dynamodb.scan(TableName=DynamoDBTableName)

    print(response['Items'])
    print(event)

    if event['httpMethod'] == 'GET':
        myresponse = response['Items']
        ### FORMATTING CODE : ###
        payload = []
        for item in myresponse:
            payloaditem = {'email':item['email']['S'], 'title': item['title']['S'],'name': item['name']['S']}
            payload.append(payloaditem)
        return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,PUT,GET'
        },
        'body': json.dumps(payload)
        }
    else:
        body = json.loads(event['body'].replace("\\", " "))
        print(body)
        title = str(body['title'])
        name = str(body['name'])
        email = str(body['email'])

        dynamodb.put_item(TableName=DynamoDBTableName, Item={'title': {'S':title},'name':{'S':name}, 'email':{'S':email },})
        return {
            'statusCode': 200,
            'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,PUT,GET'
            },
            'body': json.dumps('Suc')
        }
