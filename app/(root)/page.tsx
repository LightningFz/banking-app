import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import TotalBalance from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Fawaz', lastName: 'Katranji', email: 'katfawaz64@gmail.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions effeiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.67}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{},{}]}
      />
    </section>
  )
}

export default Home