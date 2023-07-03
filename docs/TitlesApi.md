# TempApi.TitlesApi

All URIs are relative to *https://83.212.100.226:4001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createtitles**](TitlesApi.md#createtitles) | **POST** /titles | Creates the data
[**deletetitles**](TitlesApi.md#deletetitles) | **DELETE** /titles/{titlesId} | Delete the element
[**getAlltitles**](TitlesApi.md#getAlltitles) | **GET** /titles/getAll | Get all the data
[**getByParamstitles**](TitlesApi.md#getByParamstitles) | **GET** /titles/getByParams | Get all the data based on user query
[**gettitles**](TitlesApi.md#gettitles) | **GET** /titles/{titlesId} | Get the element
[**updatetitles**](TitlesApi.md#updatetitles) | **PUT** /titles/{titlesId} | Updates the element



## createtitles

> Titles createtitles(titles)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitlesApi();
let titles = new TempApi.Titles(); // Titles | data to be created
apiInstance.createtitles(titles, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titles** | [**Titles**](Titles.md)| data to be created | 

### Return type

[**Titles**](Titles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletetitles

> deletetitles(titlesId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitlesApi();
let titlesId = "titlesId_example"; // String | the Id parameter
apiInstance.deletetitles(titlesId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titlesId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlltitles

> [Titles] getAlltitles()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitlesApi();
apiInstance.getAlltitles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Titles]**](Titles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamstitles

> [Titles] getByParamstitles(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitlesApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamstitles(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Titles]**](Titles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettitles

> Titles gettitles(titlesId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitlesApi();
let titlesId = "titlesId_example"; // String | the Id parameter
apiInstance.gettitles(titlesId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titlesId** | **String**| the Id parameter | 

### Return type

[**Titles**](Titles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetitles

> Titles updatetitles(titlesId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TitlesApi();
let titlesId = "titlesId_example"; // String | the Id parameter
let opts = {
  'titles': new TempApi.Titles() // Titles | data to be updated
};
apiInstance.updatetitles(titlesId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titlesId** | **String**| the Id parameter | 
 **titles** | [**Titles**](Titles.md)| data to be updated | [optional] 

### Return type

[**Titles**](Titles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

