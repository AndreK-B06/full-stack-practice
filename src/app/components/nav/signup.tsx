export function signUp() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input
            type="text"
            name="firstname"
            id="fname"
            onChange={handleChange}
            value={FormData.firstname}
            required
            maxLength={20}
          />
          <br />
        </section>

        <section>
          <label htmlFor="lastname">Last Name</label>
          <br />
          <input
            type="text"
            name="lastname"
            id="lname"
            onChange={handleChange}
            value={FormData.lastname}
            required
            maxLength={20}
          />
          <br />
        </section>

        <section>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={FormData.email}
            required
            maxLength={40}
          />
        </section>

        <section>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="pass"
            onChange={handleChange}
            value={FormData.password}
            required
            maxLength={15}
          />
        </section>
      </form>
    </>
  );
}
