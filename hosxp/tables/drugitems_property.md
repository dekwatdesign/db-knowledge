# `drugitems_property`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_property_id | int(11) | NO | PRI | 0 |  |  |
| drugitems_property_name | varchar(250) | YES | UNI | NULL |  |  |
| group_code | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drugitems_property_name | drugitems_property_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drugitems_property_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "drugitems_property_id": 1,
    "drugitems_property_name": "High Alet Drug",
    "group_code": null,
    "hos_guid": null
  },
  {
    "drugitems_property_id": 2,
    "drugitems_property_name": "รับยาที่ห้องยา",
    "group_code": "0",
    "hos_guid": null
  },
  {
    "drugitems_property_id": 3,
    "drugitems_property_name": "รับยา Rider",
    "group_code": "1",
    "hos_guid": null
  },
  {
    "drugitems_property_id": 4,
    "drugitems_property_name": "รับยา พัสดุ",
    "group_code": "2",
    "hos_guid": null
  }
]
```
