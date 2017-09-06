import { } from "mocha";
import { should } from "chai";
import Vue from "vue";
import HelloComponent from "../src/components/Hello.vue";

describe("hello-component", () => {

    describe("initialization", () => {

        it('should set the correct name', () => {
            
            let myname: "myname";
            let initialEnthusiasm: 1;
            const ctor = Vue.extend(HelloComponent);
            const cmp = new ctor().$mount();
            //console.log(ctor);
            /*
            const vm: any = new ctor({ propsData: { name: myname, initialEnthusiams: initialEnthusiasm } }).$mount();
            should().exist(vm);
            vm.name.should.be(myname);
            vm.initialEnthusiams.should.be(initialE);
            */
        });            

        it('should set the correct increment', () => {
            
        });            

        it('should print the correct output', () => {
            
        });            

    });

    describe("commands", () => {

        it('should increase the greeting', () => {

        });

        it("should decrease the greeting", () => {

        });

        it("should not decrease the greeting when 1", () => {

        });

    });

});