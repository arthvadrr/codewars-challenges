def valid_phone_number(p):
    f = {
        'o' : lambda s : s == '(',
        'c' : lambda s : s == ')',
        'h' : lambda h : h == '-',
        'i' : lambda i : i.isdigit(),
        's' : lambda s : s == ' '
    }

    mask = ['o', 'i', 'i', 'i', 'c', 's', 'i', 'i', 'i', 'h', 'i', 'i', 'i', 'i']

    if len(p) == 14:
        for i, l in enumerate(mask):
            if not f[l](p[i]): return False
        return True
    else: return False