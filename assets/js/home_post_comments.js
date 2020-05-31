{
    // console.log('hello');
     let createComment=function(postId){
         let newCommentForm=$(`#post-${postId}-comments-form`);
 
         newCommentForm.submit(function(e){
             e.preventDefault();
 
             $.ajax({
                 type:'post',
                 url:'/comments/create',
                 data:newCommentForm.serialize(),
                 success:function(data){
                     console.log(data);
                     let newComment=newCommentDom(data.data.comment);
                     $(`#posts-comments-${postId}`).prepend(newComment);
                     deleteComment($(' .delete-comment-button',newComment) );
 
 
 
                     new Noty({
                         theme:'relax',
                         text:'Comment Published',
                         type:'success',
                         layout:'topRight',
                         timeout:'1500'
                     }).show();
 
                 },error:function(error){
                     console.log(error.responseText);
 
                 }
 
             });
         });
     }
     let newCommentDom=function(comment){
         return $(`<li id="comment-${ comment._id }">
         <p>
             
             <small>
                 <a class="delete-comment-button" href="/comments/destroy/${comment._id}">X</a>
             </small>
             
             ${comment.content}
             <br>
             <small>
                 ${comment.user.name}
             </small>
         </p>    

 </li>`);
     }

     let deletePost=function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();

            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success:function(data){
                    $(`#post-${data.data.comment_id}`).remove();


                    new Noty({
                        theme: 'relax',
                        text: "Comment Deleted",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();

                    
                },error:function(error){
                    console.log(error.responseText);
                }
            })
        })
    }


 
 
     
 
 
 
     createComment();
 }