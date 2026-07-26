# `birth_asphyxia_factor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| birth_asphyxia_factor_id | int(11) | NO | PRI | 0 |  |  |
| birth_asphyxia_factor_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_birth_asphyxia_factor_name | birth_asphyxia_factor_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | birth_asphyxia_factor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "birth_asphyxia_factor_id": 1,
    "birth_asphyxia_factor_name": "ปัจจัยทางมารดา",
    "hos_guid": null
  },
  {
    "birth_asphyxia_factor_id": 2,
    "birth_asphyxia_factor_name": "ปัจจัยจากการคลอด",
    "hos_guid": null
  },
  {
    "birth_asphyxia_factor_id": 3,
    "birth_asphyxia_factor_name": "ปัจจัยด้านรก น้ำคร่ำ สายสะดือ",
    "hos_guid": null
  },
  {
    "birth_asphyxia_factor_id": 4,
    "birth_asphyxia_factor_name": "ปัจจัยจากตัวเด็ก",
    "hos_guid": null
  }
]
```
