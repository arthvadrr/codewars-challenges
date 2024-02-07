import sys
import base64
import gzip
import binascii

def decode_and_print(encoded_data):
    # Base64 decoding
    decoded_data_base64 = base64.b64decode(encoded_data)

    # Gzip decompression
    try:
        decompressed_data = gzip.decompress(decoded_data_base64)
        print("Decoding Output:")
        print(decompressed_data.decode('utf-8'))
    except gzip.BadGzipFile as gzip_error:
        print("Error during gzip decompression:", gzip_error)
        print("Falling back to base64 decoding only:")
        print(decoded_data_base64.decode('utf-8'))
    except Exception as e:
        print("Unexpected error:", e)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <base64_encoded_data>")
        sys.exit(1)

    encoded_data = sys.argv[1]
    decode_and_print(encoded_data)
