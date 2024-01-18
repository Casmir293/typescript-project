interface Job {
  title: string
  location: string
  salary: number
  id: string
}

const jobs: Job[] = [
  { title: 'Software Engineer', location: 'Cityville', salary: 80000, id: '1' },
  { title: 'Frontend Engineer', location: 'Ashville', salary: 85000, id: '2' },
  { title: 'Backend Engineer', location: 'NY', salary: 70000, id: '3' },
  { title: 'Mobile Engineer', location: 'New Jersey', salary: 90000, id: '4' },
  { title: 'Desktop Engineer', location: 'NC', salary: 1200000, id: '5' }
]

export default jobs
