* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    width:100%;
    height: 100%
}

body{
     width:100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 100%;
    min-height: 100%;
    font-size: 15px;
    font-family: sans-serif;
    background-color: black;
    background-image: url(images/bg-bottom.svg), url(images/bg-top.svg);
    background-repeat: no-repeat, no-repeat;
    background-position: 0% 100%, 100% 0%;
    background-size: 18rem, 15rem;   
}

h1 {
    text-align: center;
    color: hsl(234, 14%, 49%);
    font-size: 1.5em;
    padding: 2rem 0;
}

h2 {
   font-size: 1em; 
}

h3 {
    font-size: 3.9em;
    padding: 1rem 3rem;   
}

h4 {
    font-size: 3.9em;
    padding: 1rem 3rem; 
    display: none
}

p {
    font-size: 1em;
}

.selector {
    display: flex;
    color: hsl(234, 14%, 74%);
    justify-content: center;
    align-items: center;
}

#selector-bar {
    background-color: hsl(237, 63%, 64%);
    width: 3rem;
    height: 1.5rem;
    margin: 0 1.2rem;
    padding: 0.1rem;
    border-radius: 15px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer
}

#selector-ball {
    width: 1.3rem;
    height: 1.3rem;
    background-color: white;
    border-radius: 50%;
    transition-duration: 5000;
}

#selector-bar:hover {
    opacity: 0.6;
}

#cards {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 2rem auto;
    text-align: center;
}

.card-left , .card-middle , .card-right {
    padding: 1.3rem;
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 19px -8px rgba(0,0,0,0.75);
}

.card-middle {
    padding: 3rem 1.3rem;
    background: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
    color: black;
    border-radius: 10px;
}

.card-middle p ,.card-left p , .card-right p  {
   padding: 1rem 0;
}


.card-left p , .card-right p {
   color: hsl(233, 13%, 49%);
}

.card-left {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px
}

.card-right {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px
}

#card hr {
    width: 80%;
    margin: auto;
    opacity: 0.2;
}

button {
    width: 85%;
    margin : 1.5rem auto 0.5rem auto;
    padding: 0.8rem;
    cursor: pointer;
    font-size: 0.8rem;
    transition-duration: 3000;
    color:white;
    background-color: hsl(237, 63%, 64%);
    border: none;
    border-radius: 5px; 
    text-transform: uppercase;
}

.card-middle button {
    color: hsl(237, 63%, 64%);
    background-color: white;  
}

.card-middle button:hover{
    color:white;
    background-color: transparent;
}

button:hover{
    color:hsl(237, 63%, 64%);
    background-color: transparent;
}

/*Media queries*/

@media only screen and (max-width: 760px){
    #cards {
        flex-direction: column;
        
    }
    .card-left , .card-middle , .card-right {
        margin: 1rem;
        border-radius: 10px;
        width: 80%
    }
    
}








Footer
