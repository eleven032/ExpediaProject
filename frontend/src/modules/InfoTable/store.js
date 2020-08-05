import {
  observable, action, runInAction,
} from 'mobx';
import httpRequest from '@utils/httpRequest';
import { ageCalculate } from '@utils/helper';
class UserStore {
  @observable userList = [];

  @observable isLoading = false;

  @observable error = null;

  @action async getUserList() {
    this.isLoading = true;
    this.error = null;
    const url = '/contacts';

    try {
      const res = await httpRequest.get(url);
      // const tmp = 
      res.data.contactList.map((contact) =>
        this.userList.push({
          id: contact.UserID,
          title: contact.Title,
          name: contact.Name,
          age: ageCalculate(contact.BirthDate),
          favoriteFlag: contact.IsFavorite,
          contactDetail: contact.count,
        })
      );
      console.log(this.userList)
    } catch (e) {
      console.log(e)
      runInAction(() => { this.error = e; });
    } finally {
      runInAction(() => { this.isLoading = false; });
    }
  }
}

export default new UserStore();
