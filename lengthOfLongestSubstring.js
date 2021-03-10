//Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s){
        //store the length of s
        let length = s.length;
        //check if the string has 1 or 0 letters
        if(length <= 1) {
            return length
        }
        //initialize pointers
        let p = 0;
        let q = 1;
        //initialize result
        let result = 1;
        //while q os less than the length of s
        while(q < length){
            //keep track of the letters in between p and q pointers
            let sub = s.slice(p,q);
            //this looks at letter inside of the substring
            let i = sub.indexOf(s[q]);
            //this runs if i is not in the substring
            if( i !== -1){
                //this advances the pointer to the location of i + 1
                p = p + i + 1;
            }
            //advance pointer q forward
            q++;
            //sets result equal to pointer q - pointer p if greater than current result
            result = q - p > result ? q - p : result;
        }
        return result;
}

lengthOfLongestSubstring("dvdf");


/*
In formal language theory and computer science, a substring is a contiguous sequence of characters within a string. 
For instance, "the best of" is a substring of "It was the best of times". 
This is not to be confused with subsequence, which is a generalization of substring. 
For example, "Itwastimes" is a subsequence of "It was the best of times", but not a substring.
*/