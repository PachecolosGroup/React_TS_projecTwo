/// Solo types que van a hacer usados multiples veces

export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

/// Heredar de Guitar es con = y usando el signo de amperson & 
export type CartItem = Guitar & {
    quantity : number
}

/// Utility types Pick<> | Omit<>
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> 

/// Look up 
// export type GuitarID = Guitar['id']


