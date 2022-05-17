class TesztKerdes {
    constructor(node, adat){
        this.node=node;
        this.adat=adat;
        this.kerdes=this.node.children(".kerdes");
        this.v1=this.node.children(".v1");
        this.v2=this.node.children(".v2");
        this.v3=this.node.children(".v3");
        this.v4=this.node.children(".v4");
        this.setAdat(this.adat);
    }

    setAdat(adat){
        this.adat=adat;
        this.kerdes.text(adat.kerdes);
        this.v1.text(adat.v1);
        this.v2.text(adat.v2);
        this.v3.text(adat.v3);
        this.v4.text(adat.v4);
    }

}