import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Swal from 'sweetalert2';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Produto } from 'src/app/shared/models/produtos.model';
@Injectable()
export class ProdutosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private produtosUrl = 'api/PRODUTOS';

  constructor(
    private http: HttpClient) { }

  obterProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl).pipe(catchError(this.handleError<Produto[]>('obter', [])));
  }

  incluirProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtosUrl, produto, this.httpOptions).pipe(
      tap(_ => this.log(`Inclusão Efetuada`,`O produto Cód. = ${produto.id} foi adicionado com sucesso!`, false)),
      catchError(this.handleError<Produto>('incluir'))
    );
  }

  editarProduto(produto: Produto): Observable<any> {
    return this.http.put(this.produtosUrl, produto, this.httpOptions).pipe(
      tap(_ => this.log(`Edição Efetuada`,`O produto Cód. = ${produto.id} foi atualizado com sucesso!`, false)),
      catchError(this.handleError<any>('editar'))
    );
  }

  excluirProduto(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.produtosUrl}/${id}`, this.httpOptions).pipe(
      tap(_ => this.log(`Exclusão Efetuada`,`O produto Cód. = ${id} foi deletado com sucesso!`, false)),
      catchError(this.handleError<Produto>('excluir'))
    );
  }

  private log(title: string, mensagem: string, error: boolean): void {
    Swal.fire({
      icon: error ? 'error' : 'success',
      title: title,
      text: mensagem,
      showConfirmButton: false,
      timer: 1500
    });
  }

  private handleError<T>(operacao: string, result?: T) {
    return (error: any): Observable<T> => {
  
      this.log(`Operação não realizada!`,`Ocorreu uma falha ao ${operacao} o produto!`, true);
      console.error(error);
  
      return of(result as T);
    };
  }


}