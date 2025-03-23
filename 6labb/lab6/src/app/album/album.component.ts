import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../album.model';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent implements OnInit {
  albums!: Album[];
  loaded: boolean = false;

  constructor(private albumService: AlbumsService) {
  }
  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums.map(album => {
        const savedTitle = localStorage.getItem(`album_${album.id}_title`);
        if (savedTitle) {
          return {...album, title: savedTitle};
        }
        return album;
      });
      
      this.loaded = true;
    })
  }

  deletePost(id: number) {
    this.albums = this.albums.filter(a => a.id !== id)
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log("Deleted album successfully")
    })
  }
  newAlbumTitle: string = '';
  
  addNewAlbum() {
  if (!this.newAlbumTitle.trim()) {
    alert('Please enter an album title');
    return;
  }
  
  this.albumService.createAlbum(this.newAlbumTitle).subscribe({
    next: (album) => {
      console.log('Album created successfully:', album);
      this.albums.unshift(album); 
      this.newAlbumTitle = ''; 
    },
    error: (error) => {
      console.error('Error creating album:', error);
      alert('Failed to create album. Please try again.');
    }
  });
}
}
