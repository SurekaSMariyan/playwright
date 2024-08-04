import{test as base} from 'playwright-bdd'
import { Login } from '../../src/pages/login-page';

type allStepClasses={
    login:Login;
}

export const test=base.extend<allStepClasses>({
    login:async({page}, use)=>{await use(new Login(page));}
    //<object>:async({page}, use)=>{await use(new <classNameinPage>(page));}
})