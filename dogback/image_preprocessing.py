import cv2
import numpy as np
def unsharpMasking(img): #unsharpMasking까지 전처리 
#     img = cv2.resize(img, (350, 350))
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, ksize=(3, 3), sigmaX=0)
    mask = gray - blurred
    #맨처음 alpha 1이였음 높아질수록 코주름이 더 많이 나옴 8까지 해봤는데 4가 가장 ㄱㅊ은듯요
    alpha = 2
    unsharp = gray + alpha * mask
    return unsharp

def img_preprocessing(img_path):
    img = cv2.imread(img_path)
    img = unsharpMasking(img)
    img = cv2.Laplacian(img, cv2.CV_8U, ksize=3)
    return img

def img_resize_reshape(img):
    img = cv2.resize(img, (96, 96))
    img = img.reshape((1, 96, 96, 1)).astype(np.float32) / 255
    return img