import 'mobx-react-lite/batchingForReactDom';
import {
  observable, action, runInAction,
} from 'mobx';
import httpRequest from '@utils/httpRequest';
import { ageCalculate } from '@utils/helper';

class UserStore {
  @observable userList = [];

  @observable isLoading = false;

  @observable error = null;

  @action async getUserList(pageNumber, rowsPerPage) {
    this.isLoading = true;
    this.error = null;
    const url = `/contacts?pageNumber=${pageNumber}&rowsPerPage=${rowsPerPage}`;

    try {
      const res = await httpRequest.get(url);
      this.userList = [];

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
    } catch (e) {
      runInAction(() => { this.error = e; });
    } finally {
      runInAction(() => { this.isLoading = false; });
    }
  }
}

export default new UserStore();
