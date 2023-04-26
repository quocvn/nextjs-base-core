import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react'
import Image from 'next/image'

export const ProfileCard = () => {
  return (
    <Card>
      <CardHeader floated={false} className='h-80'>
        <img
          src='https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fteam-3.jpg&w=1920&q=100'
          alt='profile'
        />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant='h4' color='blue-gray' className='mb-2'>
          Natalie Paisley
        </Typography>
        <Typography color='blue' className='font-medium' textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className='flex justify-center gap-7 pt-2'>
        <Tooltip content='Like'>
          <Typography as='a' href='#facebook' variant='lead' color='blue' textGradient>
            <Image
              className='h-6 w-6'
              src='/assets/icons/template/facebook.svg'
              alt='facebook'
              height={30}
              width={30}
            />
          </Typography>
        </Tooltip>
        <Tooltip content='Follow'>
          <Typography as='a' href='#twitter' variant='lead' color='light-blue' textGradient>
            <Image
              className='h-6 w-6'
              src='/assets/icons/template/twitter.svg'
              alt='twitter'
              height={30}
              width={30}
            />
          </Typography>
        </Tooltip>
        <Tooltip content='Follow'>
          <Typography as='a' href='#instagram' variant='lead' color='purple' textGradient>
            <Image
              className='h-6 w-6'
              src='/assets/icons/template/instagram.svg'
              alt='instagram'
              height={30}
              width={30}
            />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  )
}
