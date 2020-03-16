const { expect } = require('chai');
const User = require('../../src/models/user.model');


const resetUser = () => {
  const user = new User({
    profile_picture: 'testing_url.com',
    title: 'New Member',
    badges: 'General',
    firstname: 'David',
    lastname: 'Hew-wing',
    username: 'hehexd',
    graduation: {
      year: 2021,
      month: 'January',
    },
    description: 'haha u suck noob',
  });
  return user;
};

describe('User Model Test', () => {
  let user = resetUser();

  afterEach(() => {
    user = resetUser();
  });

  it('should be invalid if title is not in enums', (done) => {
    user.title = 'hehe xd';
    user.validate((err) => {
      expect(err.errors['title.0']).to.exist;
      done();
    });
  });

  it('should be invalid if badges it not in enums', (done) => {
    user.badges = 'hehe xd';
    user.validate((err) => {
      expect(err.errors['badges.0']).to.exist;
      done();
    });
  });

  it('should be invalid if no firstname', (done) => {
    user.firstname = null;
    user.validate((err) => {
      expect(err.errors.firstname).to.exist;
      done();
    });
  });

  it('should be invalid if no lastname', (done) => {
    user.lastname = null;
    user.validate((err) => {
      expect(err.errors.lastname).to.exist;
      done();
    });
  });


  it('should be invalid if no username', (done) => {
    user.username = null;
    user.validate((err) => {
      expect(err.errors.username).to.exist;
      done();
    });
  });


  it('should be invalid if no graduation', (done) => {
    user.graduation = null;
    user.validate((err) => {
      expect(err.errors.graduation).to.exist;
      done();
    });
  });


  it('should be invalid if rank has wrong typing', (done) => {
    user.rank = ['askjldha'];
    user.validate((err) => {
      expect(err.errors.rank).to.exist;
      done();
    });
  });
});
