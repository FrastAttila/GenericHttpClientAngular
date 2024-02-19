import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostHttpContext } from "src/app/enums/posts-http-context.enum";
import { Post } from "src/app/models/posts.model";
import { GenericHttpClientService } from "src/app/services/generic/generic-http-client.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  result$: Observable<Post> | undefined;

  comments$: Observable<any> | undefined;

  constructor(private genericHttpService: GenericHttpClientService) {}

  ngOnInit(): void {
    this.posts$ = this.genericHttpService.retrieve<Post[]>(
      PostHttpContext.GetPosts
    );
    this.comments$ = this.genericHttpService.getbyId(
      PostHttpContext.GetComments,
      { commentId: 1 }
    );
    this.result$ = this.genericHttpService.syncData<Post, Post>(
      PostHttpContext.CreatePost,
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    );
  }
}
