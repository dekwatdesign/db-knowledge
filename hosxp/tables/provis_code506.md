# `provis_code506`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(3) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "Cholera",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "02",
    "name": "Acute diarrhea, Diarrhea,Infantile diarrhea, Gastroenteritis,Enteritis,Summer diarrhea",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "03",
    "name": "Food Poisoning,Foodborne disease,Foodborne intoxication,Acute foodborne",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "04",
    "name": "Dysentery, unspecified dysentery,Entero-colitis,Colitis",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "05",
    "name": "Bacillary dysentery, Shigellosis",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "06",
    "name": "Amoebic dysentery, Amoebiasis",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "07",
    "name": "Enteric fever",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "08",
    "name": "Typhoid fever,Typhus abdomonalis",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
