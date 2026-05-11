```r
packages.install('imager')
file = file.choose()
image = load.image(file)
summary(image)
str(image)
plot(image)
gray_image = grayscale(image)
gray_image
plot(gray_image)
save_image(gray_image, "D://gray.jpg")
```
