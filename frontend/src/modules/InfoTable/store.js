import {
  observable, action, runInAction,
} from 'mobx';
import httpRequest from '../../utils/httpRequest';

class UserStore {
  @observable userList = [];

  @observable isLoading = false;

  @observable error = null;

  @action async getUserList() {
    this.isLoading = true;
    this.error = null;
    const url = '/users';

    try {
      const res = await httpRequest.get(url);
      console.log(res);
    } catch (e) {
      runInAction(() => { this.error = e; });
    } finally {
      runInAction(() => { this.isLoading = false; });
    }
  }
}

export default new UserStore();
