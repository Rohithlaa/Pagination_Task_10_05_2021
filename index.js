
//creating main container
var container = document.createElement('div')
container.setAttribute('class', 'container')

//creating table 
var table = document.createElement('table')
table.classList.add('table', 'table-bordered')

//Creating thead and appending data 
var thead = document.createElement('thead')

var headtr = document.createElement('tr')

var headth1 = createtrth('th', '#')
var headth2 = createtrth('th', 'First')
var headth3 = createtrth('th', 'Email')

headtr.append(headth1,headth2,headth3)
thead.append(headtr)

// creating tbody and appending data

var tbody = document.createElement('tbody')
tbody.setAttribute('id','data')

table.append(thead,tbody)

// ***************creating Pagination*******************
//appending table to container
container.append(table)

// Creating BUTTONS

var arr= []
for(var i=0;i<10;i++){
    var button = document.createElement('button')
    button.setAttribute('class', 'btn btn-primary')
    button.style.marginRight = "3px"
    button.type='button'
    button.innerHTML = i+1
    arr.push(button)
    container.append(button)
    
}
var button_First = document.createElement('button')
    button_First.setAttribute('class','btn btn-primary')
    button_First.style.marginRight = "3px"
    button_First.type='button'
    button_First.innerHTML = "First"
    arr.push(button_First)
var button_Last = document.createElement('button')
    button_Last.setAttribute('class','btn btn-primary')
    button_Last.style.marginRight = "3px"
    button_Last.type='button'
    button_Last.innerHTML = 'Last'
    arr.push(button_Last)
var button_Prev = document.createElement('button')
    button_Prev.setAttribute('class','btn btn-primary')
    button_Prev.style.marginRight = "3px"
    button_Prev.type='button'
    button_Prev.innerHTML = 'Prev'
    arr.push(button_Prev)
container.append(button_First,button_Last,button_Prev)

//appending whole container to the document
document.body.append(container)

function createtrth(eleName = 'td', value="",className=""){
    var td = document.createElement(eleName)
    td.innerHTML = value
    td.setAttribute('class', className)
    return td
}
// default

function display(x){
    var req = new XMLHttpRequest()
            req.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
            req.send()
            req.onload = function(){
                var data = JSON.parse(req.response)
                var temp = ""
                var b = 10
                for(var i=(x-1)*10;i<(x*b);i++){
                    document.getElementById('data').innerHTML = " "
                    temp += "<tr>"
                    temp+= "<td>" + data[i].id + "</td>"
                    temp+= "<td>" + data[i].name+"</td>"
                    temp+= "<td>"+data[i].email+"</td></tr>"
                }
                document.getElementById('data').innerHTML = temp
            }

}  
var First = arr[0].innerHTML
var last = arr[arr.length -4].innerHTML
var temp = []
arr.forEach(ele => {
    ele.onclick = function(event){
        if(ele.innerHTML >=1 && ele.innerHTML<=10){
            temp.push(event.target.innerHTML)
            display(ele.innerHTML)  
        }
        if(ele.innerHTML === 'Prev'){
            var con_res = parseInt(temp[temp.length -1])-1
            var con_res1 = con_res.toString()
            temp.push(con_res1)
            display(con_res1)   
        }
        if(ele.innerHTML === 'First'){
            display(First)
        }
        if(ele.innerHTML === 'Last'){
            display(last)
            temp.push('10')
        }
    } 
})
            






            






