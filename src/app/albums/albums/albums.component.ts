import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AlbumsHttpContext } from "src/app/enums/albums-http-context.enum";
import { Album } from "src/app/models/albums.model";
import { GenericHttpClientService } from "src/app/services/generic/generic-http-client.service";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"],
})
export class AlbumsComponent implements OnInit {
  public albums$: Observable<Album[]> | undefined;
  constructor(private genericHttpService: GenericHttpClientService) {}

  ngOnInit(): void {
    this.albums$ = this.genericHttpService.retrieve<Album[]>(
      AlbumsHttpContext.GetAlbums
    );
  }
}
