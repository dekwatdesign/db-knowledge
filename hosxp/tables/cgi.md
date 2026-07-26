# `cgi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) unsigned | NO | PRI | 0 |  |  |
| hcode | varchar(15) | YES |  | NULL |  |  |
| vdate | date | YES |  | NULL |  |  |
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| dob | date | YES |  | NULL |  |  |
| pdx | varchar(6) | YES |  | NULL |  |  |
| dx0 | varchar(6) | YES |  | NULL |  |  |
| dx1 | varchar(6) | YES |  | NULL |  |  |
| dx2 | varchar(6) | YES |  | NULL |  |  |
| dx3 | varchar(6) | YES |  | NULL |  |  |
| cgis_score | int(11) | YES |  | NULL |  |  |
| clinic | char(1) | YES | MUL | NULL |  |  |
| user | varchar(50) | YES |  | NULL |  |  |
| dupdate | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| PRIMARY | id | yes | 1 |
| PRIMARY | vn | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "hcode": "12251",
    "vdate": "2017-09-01",
    "vn": "600901093022",
    "hn": "560000911",
    "sex": "1",
    "dob": "2008-08-19",
    "pdx": "F900",
    "dx0": "F848",
    "dx1": "R418",
    "dx2": "",
    "dx3": "",
    "cgis_score": 3,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-19"
  },
  {
    "id": 2,
    "hcode": "12251",
    "vdate": "2017-06-01",
    "vn": "600601140010",
    "hn": "550002271",
    "sex": "1",
    "dob": "2002-07-23",
    "pdx": "F848",
    "dx0": "F900",
    "dx1": "",
    "dx2": "",
    "dx3": "",
    "cgis_score": 4,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-08"
  },
  {
    "id": 3,
    "hcode": "",
    "vdate": "2017-06-01",
    "vn": "600601083034",
    "hn": "580000534",
    "sex": "2",
    "dob": "2009-10-14",
    "pdx": "F848",
    "dx0": "F4325",
    "dx1": "F900",
    "dx2": "",
    "dx3": "",
    "cgis_score": 5,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-08"
  },
  {
    "id": 4,
    "hcode": "12251",
    "vdate": "2017-05-01",
    "vn": "600501110012",
    "hn": "530093654",
    "sex": "2",
    "dob": "2004-01-23",
    "pdx": "F900",
    "dx0": "",
    "dx1": "",
    "dx2": "",
    "dx3": "",
    "cgis_score": 3,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-08"
  },
  {
    "id": 5,
    "hcode": "12251",
    "vdate": "2016-12-01",
    "vn": "591201084212",
    "hn": "590001623",
    "sex": "1",
    "dob": "2010-06-29",
    "pdx": "F848",
    "dx0": "",
    "dx1": "",
    "dx2": "",
    "dx3": "",
    "cgis_score": 4,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-08"
  },
  {
    "id": 6,
    "hcode": "12251",
    "vdate": "2017-06-01",
    "vn": "600601093014",
    "hn": "530130454",
    "sex": "1",
    "dob": "2007-11-18",
    "pdx": "F840",
    "dx0": "F791",
    "dx1": "",
    "dx2": "",
    "dx3": "",
    "cgis_score": 4,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-08"
  },
  {
    "id": 7,
    "hcode": "12251",
    "vdate": "2017-06-01",
    "vn": "600601083026",
    "hn": "590001570",
    "sex": "1",
    "dob": "2012-03-29",
    "pdx": "F900",
    "dx0": "Z620",
    "dx1": "",
    "dx2": "",
    "dx3": "",
    "cgis_score": 5,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-08"
  },
  {
    "id": 8,
    "hcode": "12251",
    "vdate": "2017-06-01",
    "vn": "600601100032",
    "hn": "590000923",
    "sex": "2",
    "dob": "2012-11-22",
    "pdx": "F840",
    "dx0": "",
    "dx1": "",
    "dx2": "",
    "dx3": "",
    "cgis_score": 4,
    "clinic": "3",
    "user": "yuwa075",
    "dupdate": "2017-09-08"
  }
]
```
