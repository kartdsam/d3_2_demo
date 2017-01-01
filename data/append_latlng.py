import codecs
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

INPUT_FILE = str(sys.argv[1])
LATLNG_FILE = str(sys.argv[2])
OUTPUT_FILE = 'data_with_latlng.csv'

def find(s, ch):
    return [i for i, ltr in enumerate(s) if ltr == ch]

arr_latlng = {}
with codecs.open(LATLNG_FILE,'r', 'utf-8', errors='ignore') as f_latlng:
	next(f_latlng)
	for l in (f_latlng):
		quote_l = l.find('\"')
		quote_r = quote_l + l[quote_l+1:].find('\"')
		addr = l[quote_l+1:quote_r+1]
		latlng = l[quote_r+3:-1].split(',')
		arr_latlng[addr] = latlng
	f_latlng.close()

# print(str(arr_latlng))

with codecs.open(INPUT_FILE,'r', 'utf-8', errors='ignore') as f_in:
	with codecs.open(OUTPUT_FILE,'w', 'utf-8', errors='ignore') as f_out:
		next(f_in)
		f_out.write('Date,Time,Location,lat,lng,Operator,Flight #,Route,Type,Registration,cn/In,Aboard,Fatalities,Ground,Summary\n')
		for l in f_in:
			quote_l = l.find('\"')
			quote_r = quote_l + l[quote_l+1:].find('\"')
			addr = l[quote_l+1:quote_r+1]
			pre_addr = l[:quote_l]
			post_addr = l[quote_r+2:]
			if addr == '':
			    f_out.write(pre_addr + '\"' + addr.replace(',','/') + '\",' + str(0.0) + ',' + str(0.0) + post_addr + '\n')
			else:
				f_out.write(pre_addr + '\"' + addr.replace(',','/') + '\",' + str(arr_latlng[addr][0]) + ',' + str(arr_latlng[addr][1]) + post_addr + '\n')
				print(pre_addr + '\"' + addr.replace(',','/') + '\",' + str(arr_latlng[addr][0]) + ',' + str(arr_latlng[addr][1]) + post_addr)
		f_out.close()
	f_in.close()
  