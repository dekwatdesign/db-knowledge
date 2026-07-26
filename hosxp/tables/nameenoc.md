# `nameenoc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| codeenoc | char(10) | YES |  | NULL |  |  |
| code506_2 | char(10) | YES |  | NULL |  |  |
| ename | varchar(150) | YES |  | NULL |  |  |
| disease_detail | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icd10 | char(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": 1,
    "name": "โรคฝุ่นหิน",
    "codeenoc": "1.1.1",
    "code506_2": "0111",
    "ename": "Silicosis",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J628"
  },
  {
    "code": 2,
    "name": "โรคใยหิน",
    "codeenoc": "1.1.2",
    "code506_2": "0112",
    "ename": "Asbestosis",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J61"
  },
  {
    "code": 3,
    "name": "โรคปอดฝุ่นฝ้าย",
    "codeenoc": "1.1.3",
    "code506_2": "0113",
    "ename": "Byssinosis",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J660"
  },
  {
    "code": 4,
    "name": "โรคทางเดินหายใจจากฝุ่นผงอินทรีย์ที่ระบุรายละเอียดอื่นๆ",
    "codeenoc": "1.1.4",
    "code506_2": "0114",
    "ename": "Airway disease due to other specific organic dusts",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J668"
  },
  {
    "code": 5,
    "name": "โรคจมูกอักเสบจากภูมิแพ้",
    "codeenoc": "1.1.5",
    "code506_2": "0115",
    "ename": "Allergic rhinitis",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J304"
  },
  {
    "code": 6,
    "name": "หอบหืดซึ่งไม่ได้เกิดจากภูมิแพ้",
    "codeenoc": "1.2.1",
    "code506_2": "0121",
    "ename": "Nonallergic asthma",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J451"
  },
  {
    "code": 7,
    "name": "หอบหืดแบบผสม",
    "codeenoc": "1.2.2",
    "code506_2": "0122",
    "ename": "Mixed asthma",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J458"
  },
  {
    "code": 8,
    "name": "หอบหืดแบบไม่เจาะจง",
    "codeenoc": "1.2.3",
    "code506_2": "0123",
    "ename": "Unspecified Asthma",
    "disease_detail": null,
    "hos_guid": "",
    "icd10": "J459"
  }
]
```
