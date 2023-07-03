/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Titles from '../model/Titles';

/**
* Titles service.
* @module api/TitlesApi
* @version 1.0.0
*/
export default class TitlesApi {

    /**
    * Constructs a new TitlesApi. 
    * @alias module:api/TitlesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createtitles operation.
     * @callback module:api/TitlesApi~createtitlesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Titles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Titles} titles data to be created
     * @param {module:api/TitlesApi~createtitlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Titles}
     */
    createtitles(titles, callback) {
      let postBody = titles;
      // verify the required parameter 'titles' is set
      if (titles === undefined || titles === null) {
        throw new Error("Missing the required parameter 'titles' when calling createtitles");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Titles;
      return this.apiClient.callApi(
        '/titles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletetitles operation.
     * @callback module:api/TitlesApi~deletetitlesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} titlesId the Id parameter
     * @param {module:api/TitlesApi~deletetitlesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletetitles(titlesId, callback) {
      let postBody = null;
      // verify the required parameter 'titlesId' is set
      if (titlesId === undefined || titlesId === null) {
        throw new Error("Missing the required parameter 'titlesId' when calling deletetitles");
      }

      let pathParams = {
        'titlesId': titlesId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/titles/{titlesId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlltitles operation.
     * @callback module:api/TitlesApi~getAlltitlesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Titles>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/TitlesApi~getAlltitlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Titles>}
     */
    getAlltitles(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Titles];
      return this.apiClient.callApi(
        '/titles/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByParamstitles operation.
     * @callback module:api/TitlesApi~getByParamstitlesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Titles>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data based on user query
     * @param {String} filter the query based on which the search is performed
     * @param {module:api/TitlesApi~getByParamstitlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Titles>}
     */
    getByParamstitles(filter, callback) {
      let postBody = null;
      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling getByParamstitles");
      }

      let pathParams = {
      };
      let queryParams = {
        'filter': filter
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Titles];
      return this.apiClient.callApi(
        '/titles/getByParams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the gettitles operation.
     * @callback module:api/TitlesApi~gettitlesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Titles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} titlesId the Id parameter
     * @param {module:api/TitlesApi~gettitlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Titles}
     */
    gettitles(titlesId, callback) {
      let postBody = null;
      // verify the required parameter 'titlesId' is set
      if (titlesId === undefined || titlesId === null) {
        throw new Error("Missing the required parameter 'titlesId' when calling gettitles");
      }

      let pathParams = {
        'titlesId': titlesId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Titles;
      return this.apiClient.callApi(
        '/titles/{titlesId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatetitles operation.
     * @callback module:api/TitlesApi~updatetitlesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Titles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} titlesId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Titles} opts.titles data to be updated
     * @param {module:api/TitlesApi~updatetitlesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Titles}
     */
    updatetitles(titlesId, opts, callback) {
      opts = opts || {};
      let postBody = opts['titles'];
      // verify the required parameter 'titlesId' is set
      if (titlesId === undefined || titlesId === null) {
        throw new Error("Missing the required parameter 'titlesId' when calling updatetitles");
      }

      let pathParams = {
        'titlesId': titlesId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Titles;
      return this.apiClient.callApi(
        '/titles/{titlesId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
