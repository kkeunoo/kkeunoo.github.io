document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector('#test_btn').addEventListener('click',function(){
    //     alert('클릭')
    // })

    document.querySelector('#topBtn').addEventListener('click', function(){
        window.scrollTo({
            top:0 , 
            behavior: "smooth"
        })
    })

})