# `name506`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| code506 | char(3) | YES |  | NULL |  |  |
| ename | varchar(150) | YES |  | NULL |  |  |
| disease_detail | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| send_moph | char(1) | YES |  | NULL |  |  |

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
    "name": "อหิวาตกโรค [01]",
    "code506": "01",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  },
  {
    "code": 2,
    "name": "อุจจาระร่วง [02]",
    "code506": "02",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  },
  {
    "code": 3,
    "name": "อาหารเป็นพิษ [03]",
    "code506": "03",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  },
  {
    "code": 5,
    "name": "บิด (Bacillary dysentery or shigellosis) [05]",
    "code506": "05",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  },
  {
    "code": 6,
    "name": "บิด (Amoebic) [06]",
    "code506": "06",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  },
  {
    "code": 8,
    "name": "Typhoid [08]",
    "code506": "08",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  },
  {
    "code": 9,
    "name": "Paratyphoid [09]",
    "code506": "09",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  },
  {
    "code": 10,
    "name": "ตับอักเสบ (Hepatitis ,unspecified) [10]",
    "code506": "10",
    "ename": null,
    "disease_detail": null,
    "hos_guid": null,
    "send_moph": null
  }
]
```
