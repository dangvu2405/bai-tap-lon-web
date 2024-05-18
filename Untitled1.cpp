#include <bits/stdc++>
using namespace std;
struct node {
	int data;
	node *next;
};
struct Stack {
	node*top;
};
//thao tac co ban tren stack:
//	tao moi 1 nut : init(s)
//	ktra rong : Isempty
//	dau vao stack : push
//	lay stack: pop
void Init (Stack &s){
	s.top = NULL;
}
int IsEmpty(Stack &s){
	if(s.top==NULL){// cuoi ngan xep == NULL
		return 1;
	}
	return 0;// stack rong
}
node * makenode (Stack &s, int x){
	node*p= new node();
	if(IsEmpty(s)==1){
		cout<<"ngan xep day"<<endl;
	}
	else{
		p->data=x;
		p->next=NULL;
	}
	return x;
}
void push (Stack &s, int x){
	node*newnode = makenode(s,x);
	if(Is)
}
int main()
