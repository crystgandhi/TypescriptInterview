import{test,request, expect} from '@playwright/test';

test('API', async({request})=>{

const apiResponse=await request.get('https://jsonplaceholder.typicode.com/posts/1');
 const responseBody=await apiResponse.json();
 console.log(responseBody);
  expect(apiResponse.status()).toBe(200);
  expect(apiResponse.headers()['content-type']).toContain('application/json');
  expect(responseBody.id).toBe(1);

});