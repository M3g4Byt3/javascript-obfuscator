/**
 * @returns {string}
 */
export function UnicodeArrayBase64DecodeNodeTemplate (): string {
    return `      
        if (!{unicodeArrayCallsWrapperName}.atobPolyfillAppended) {
            {atobPolyfill}
            
            {unicodeArrayCallsWrapperName}.atobPolyfillAppended = true;
        }
        
        if (!{unicodeArrayCallsWrapperName}.base64DecodeUnicode) {                
            {unicodeArrayCallsWrapperName}.base64DecodeUnicode = function (str) {
                var string = atob(str);
                var newStringChars = [];
                
                for (var i = 0, length = string.length; i < length; i++) {
                    newStringChars += '%' + ('00' + string.charCodeAt(i).toString(16)).slice(-2);
                }
                
                return decodeURIComponent(newStringChars);
            };
        }
        
        if (!{unicodeArrayCallsWrapperName}.data) {
            {unicodeArrayCallsWrapperName}.data = {};
        }
                        
        if (!{unicodeArrayCallsWrapperName}.data[index]) {
            {selfDefendingCode}
            
            value = {unicodeArrayCallsWrapperName}.base64DecodeUnicode(value);
            {unicodeArrayCallsWrapperName}.data[index] = value;
        } else {
            value = {unicodeArrayCallsWrapperName}.data[index];
        }  
    `;
}