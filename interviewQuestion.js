/**
	 * Process each item in the items array, but no item should be processed more than once.
	 * An item can't be processed if it's parent hasn't already been processed
	 * @param  {Item[]} items array of items to be processed
	 * @return null
	 */
    function processItems(items){
        let unprocessed= items.filter(item => item.parent == null)
        for (let i = 0; i < unprocessed.length; i++){
            process(unprocessed[i]);
            items[unprocessed[i].value] = unprocessed[i]

        }

        for (let i = 0; i < items.length; i++){
          if (!items[i].processed === true){
            helper(items[i], items)
          }
        }

      };

     function helper(item, items){
       if (item.parent.processed == false){
         console.log(`I am ${item.value} and my parent is not processed, ${item.parent.value}`)
         helper(item.parent, items)
         helper(item, items)
       }
       else {
         console.log(`processing ${item.value}`)
         process(item);
       }
      }
      //---------Don't change anything below this line -------------
      function Item(id){
          this.value = id;
          this.processed = false;
          this.parent = null; //Item{}
          
      };
      
      
      function process(item){
        if(item.processed){
          console.log('Error: Item ' + item.value + ' is already processed');
          return;
        }
      
        if(item.parent && !item.parent.processed){
          console.log('Error: Item ' + item.value + ' cant be processed until after its parent');
          return;
        }
        item.processed = true;
      
      };
      
      
      function runTests(){
          var items = [];
          for(var i=0; i<10; i++){
              items[i] = new Item(i + "");
          }
          items[0].parent = items[9];
          items[1].parent = items[2];
          items[2].parent = items[7];
          items[3].parent = items[8];
          items[5].parent = items[0];
          items[6].parent = items[8];
          items[8].parent = items[4];
          items[9].parent = items[3];
          
          /*0,9
          1,2
          2,7
          3,8
          4,
          5,0
          6,8
          7
          8,4
          9, 3*/
          
       // var PI = new ProcessItems();
        var start = new Date();
       // PI.processItems(items);
        processItems(items);
        var end = new Date();
        var allProcessed = true;
        for(var i=0; i<items.length; i++){
          if(!items[i].processed){
            allProcessed = false;
            console.log('Item ' + i + ' was not processed');
            break;
          }
        }
        if(allProcessed)
          console.log('All items processed in ' + (end-start) + ' ms');
        else
          console.log('Test failed in ' + (end-start) + ' ms');
      }

      runTests();
