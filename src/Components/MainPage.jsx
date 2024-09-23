import GridRow from "./gridRow/gridRow";

function MainPage() {
  //pseudocode & personal notes
      // this has 3 main parts for styling
      //1 the page header
        //DONE
      //2 the column headers
      //3 the table
  
  //then you need to fetch data here
  //generate each row by the response
  //pass values as props down

    {/*
    What I would have done with more time

    1. First of I would have used a try-catch fetch block for getting the data read in properly
            I wanted to get ther wireframe up first using flex, I prioritized working with the templated data in email
        What I would do if i got fetch working is that I would have then have waited on the response object
        from the fetch, iterate over the number of responses (established to be 4)
            I would then iterate over each object returned from 'data' and create a GridRow for each
            GridRow would receive the response of one singular row's content as a prop
        By using an forEach or looping process, we could easily accomodate a larger return body than 4 for the expenses 
    
    2. useState implementation.
            Assuming this is a fetch of data that can update in real time or refresh in the background, I would
            tie the fetch with a state of "isFetching"
                const [isFetching, setIsFetching] = useState('false');
            this would only trigger a page re-render if we actually are done fetching new information
            state could be used elsewhere, this felt like a great way to reduce API usage overall and
            also avoid constant react page rerendering

    3. I would set the page up to use responsive sizing
            when i use flex and gridm, i prefer to set it up where if i resize the page, the items move accordingly
            not a prioritiy for this

    4. Styling
        Definitely I wish I could style it more
        Date isnt showing properly, would want to not just use a hasty "toString" conversion
        I'd grab a less simple font
        Borders to separate the headers of the grid from the content of the grid
*/}

    let row1 = {
        "id": 1,
        "merchant": "AWS",
        "amount": 1260,
        "description": "Hosting for hobby project",
        "date": "2022-05-24T12:00:00.000Z",
        "category": "training",
        "status": "draft"
    };
    let row2 = {
        "id": 2,
        "merchant": "Waterstones",
        "amount": 999,
        "description": "Programming book",
        "date": "2022-05-22T12:00:00.000Z",
        "category": "training",
        "status": "draft"
    };
    let row3 = {
        "id": 3,
        "merchant": "BA",
        "amount": 434.22,
        "description": "Flight",
        "date": "2022-05-04T12:00:00.000Z",
        "category": "travel",
        "status": "draft"
    };
    let row4 = {
        "id": 4,
        "merchant": "Wasabi",
        "amount": 7.25,
        "description": "Meal for at engineering conference",
        "date": "2022-05-04T12:00:00.000Z",
        "category": "meals",
        "status": "draft"
    };
    let rowTitle = {
        "id": 0,
        "merchant": "Merchant",
        "amount": "Amount",
        "description": "Description",
        "date": "Date",
        "category": "Category",
        "status": "Status"
    };
    
    return (
      <div>
        <h1>Expenses</h1>
        <GridRow dataContent={rowTitle}/>
        <GridRow dataContent={row1}/>
        <GridRow dataContent={row2}/>
        <GridRow dataContent={row3}/>
        <GridRow dataContent={row4}/>
      </div>
    );
  }
  
  export default MainPage;
  