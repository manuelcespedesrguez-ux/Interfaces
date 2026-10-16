# pip install "qrcode[pil]"
import qrcode

img = qrcode.make("https://www.cebem.es")
img.show()