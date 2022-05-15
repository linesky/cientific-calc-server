echo exemple : 'a=100;b=200;a*b'
while read a
do
	echo $a > out.txt
	netcat $1 $2 < out.txt
	echo " "
done
