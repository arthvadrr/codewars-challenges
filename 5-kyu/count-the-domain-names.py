'''
Story

You have a list of domain names from a log file, indicating the number of times the computer accessed those sites. However, the list shows subdomains too, but you want to see only the main sites and the total number of accesses. For example 6.clients-channel.google.com and apis.google.com should be counted together as google.com.
Task

Complete the function that takes two arguments:

    domains is a list of domain names, showing the number of access requests to each domain, as you copied it from the logs
    and the optional min_hits which defines what is the minimum number of accesses in order to appear on the output list. If this is not given, consider it 0.

Return a string ready to be printed, showing the sites with the total number of accesses, in a decreasing order.

Output requirements:

    the output should show the sites with the total number of accesses in parentheses,
    sites should have only 2 levels (e.g. ebay.com), except for .co.xx and .com.xx type domains, which should have 3 levels (e.g. amazon.co.jp),
    the list should be sorted in decreasing order of access,
    if two sites have the same number of accesses, sort them alphabetically,
    entries should be separated by newlines (\n)

Example

domains_list = 
*.amazon.co.uk    89
*.doubleclick.net    139
*.fbcdn.net    212
*.in-addr.arpa    384
*.l.google.com    317
1.client-channel.google.com    110
6.client-channel.google.com    45
a.root-servers.net    1059
apis.google.com    43
clients4.google.com    71
clients6.google.com    81
connect.facebook.net    68
edge-mqtt.facebook.com    56
graph.facebook.com    150
mail.google.com    128
mqtt-mini.facebook.com    47
ssl.google-analytics.com    398
star-mini.c10r.facebook.com    46
staticxx.facebook.com    48
www.facebook.com    178
www.google.com    162
www.google-analytics.com    127
www.googleapis.com    87

count_domains(domains_list, 500) = 
root-servers.net (1059)
google.com (957)
facebook.com (525)
google-analytics.com (525)

'''

def count_domains(domains, min_hits):
    result = []
    domain_stats = {}
    domains = domains.split('\n')
    
    for domain in domains:
        domain_str = domain.split('\t')
        uri        = domain_str[0].split('.')
        hits       = int(domain_str[1])
        top_level  = uri[-2] + '.' + uri[-1]

        if uri[-2] == 'co' or uri[-2] == 'com':
            top_level = uri[-3] + '.' + uri[-2] + '.' + uri[-1]

        if top_level in domain_stats:
            domain_stats[top_level] += hits
        else:
            domain_stats[top_level] = hits

    domain_stats = dict(sorted(domain_stats.items(), key=lambda item: (-item[1], item[0])))

    for domain in domain_stats.items():
        if domain[1] > min_hits:

            result.append('{} ({})'.format(domain[0], domain[1]))

    return '\n'.join(result)

domains_list = '''\
*.amazon.co.uk	89
*.doubleclick.net	139
*.fbcdn.net	212
*.in-addr.arpa	384
*.l.google.com	317
1.client-channel.google.com	110
6.client-channel.google.com	45
a.root-servers.net	1059
apis.google.com	43
clients4.google.com	71
clients6.google.com	81
connect.facebook.net	68
edge-mqtt.facebook.com	56
graph.facebook.com	150
mail.google.com	128
mqtt-mini.facebook.com	47
ssl.google-analytics.com	398
star-mini.c10r.facebook.com	46
staticxx.facebook.com	48
www.facebook.com	178
www.google.com	162
www.google-analytics.com	127
www.googleapis.com	87'''

print(count_domains(domains_list, 88))
print('\n')
print('expected', '''
root-servers.net (1059)
google.com (957)
facebook.com (525)
google-analytics.com (525)
in-addr.arpa (384)
fbcdn.net (212)
doubleclick.net (139)
amazon.co.uk (89)
''')