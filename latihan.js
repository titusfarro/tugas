let bintang = ''
const row = 8 

for(let b = 0 ; b < row ; b++)
{
    for(let c = 1 ; c < row ; c++)
    {
        if (a % 1 == 0){
            bintang += ('# ')
        }
        else {
            bintang += ' '
        }
    }
    bintang += '\n'
}
console.log(bintang)