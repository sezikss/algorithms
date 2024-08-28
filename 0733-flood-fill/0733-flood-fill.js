/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) 
{
   let originalColor = image[sr][sc];
   if (originalColor === newColor ) return image;
   dps(image,sr,sc,originalColor,newColor);
   return image;
};
var dps = function(image,i,j,originalColor, newColor)
{
   if (i < 0 || i >= image.length || j < 0 || j>=image[i].length ||      image[i][j] !== originalColor)
   return;
   if (image[i][j] === originalColor)
     image[i][j] = newColor;
 
   dps(image,i-1, j,originalColor,newColor);
   dps(image,i+1, j,originalColor,newColor);
   dps(image,i, j-1,originalColor,newColor);
   dps(image,i, j+1,originalColor,newColor);
 
}