# `blb_blood_items_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_items_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_items_type_code | varchar(3) | YES |  | NULL |  |  |
| blb_blood_items_type_name | varchar(200) | YES |  | NULL |  |  |
| blb_blood_items_type_nm | varchar(100) | YES |  | NULL |  |  |
| blb_blood_items_cel | char(1) | YES |  | NULL |  |  |
| blb_blood_items_plt | char(1) | YES |  | NULL |  |  |
| blb_blood_items_pls | char(1) | YES |  | NULL |  |  |
| blb_blood_items_age | int(11) | YES |  | NULL |  |  |
| blb_bag_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_blood_items_id | int(11) | YES | MUL | NULL |  |  |
| blb_centrifuge_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_type_id | blb_bag_type_id | no | 1 |
| ix_blb_blood_items_id | blb_blood_items_id | no | 1 |
| ix_blb_centrifuge_id | blb_centrifuge_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blb_blood_items_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_blood_items_type_id": 1,
    "blb_blood_items_type_code": "000",
    "blb_blood_items_type_name": "TUBE FOR REGION",
    "blb_blood_items_type_nm": "TUBE",
    "blb_blood_items_cel": null,
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 1,
    "blb_bag_type_id": 1,
    "blb_blood_items_id": 1,
    "blb_centrifuge_id": null,
    "hos_guid": null
  },
  {
    "blb_blood_items_type_id": 2,
    "blb_blood_items_type_code": "002",
    "blb_blood_items_type_name": "WHOLE BLOOD",
    "blb_blood_items_type_nm": "WB",
    "blb_blood_items_cel": null,
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 21,
    "blb_bag_type_id": 3,
    "blb_blood_items_id": 2,
    "blb_centrifuge_id": null,
    "hos_guid": null
  },
  {
    "blb_blood_items_type_id": 3,
    "blb_blood_items_type_code": "002",
    "blb_blood_items_type_name": "WHOLE BLOOD",
    "blb_blood_items_type_nm": "WB",
    "blb_blood_items_cel": null,
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 21,
    "blb_bag_type_id": null,
    "blb_blood_items_id": 2,
    "blb_centrifuge_id": null,
    "hos_guid": null
  },
  {
    "blb_blood_items_type_id": 4,
    "blb_blood_items_type_code": "002",
    "blb_blood_items_type_name": "WHOLE BLOOD",
    "blb_blood_items_type_nm": "WB",
    "blb_blood_items_cel": null,
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 35,
    "blb_bag_type_id": 4,
    "blb_blood_items_id": 2,
    "blb_centrifuge_id": null,
    "hos_guid": null
  },
  {
    "blb_blood_items_type_id": 5,
    "blb_blood_items_type_code": "002",
    "blb_blood_items_type_name": "WHOLE BLOOD",
    "blb_blood_items_type_nm": "WB",
    "blb_blood_items_cel": "N",
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 21,
    "blb_bag_type_id": 8,
    "blb_blood_items_id": 2,
    "blb_centrifuge_id": 15,
    "hos_guid": null
  },
  {
    "blb_blood_items_type_id": 6,
    "blb_blood_items_type_code": "100",
    "blb_blood_items_type_name": "PACKED RED CELLS",
    "blb_blood_items_type_nm": "RED CELLS",
    "blb_blood_items_cel": "R",
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 42,
    "blb_bag_type_id": 5,
    "blb_blood_items_id": 3,
    "blb_centrifuge_id": 1,
    "hos_guid": null
  },
  {
    "blb_blood_items_type_id": 7,
    "blb_blood_items_type_code": "100",
    "blb_blood_items_type_name": "PACKED RED CELLS",
    "blb_blood_items_type_nm": "RED CELLS",
    "blb_blood_items_cel": "R",
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 21,
    "blb_bag_type_id": 8,
    "blb_blood_items_id": 3,
    "blb_centrifuge_id": 1,
    "hos_guid": null
  },
  {
    "blb_blood_items_type_id": 8,
    "blb_blood_items_type_code": "100",
    "blb_blood_items_type_name": "PACKED RED CELLS",
    "blb_blood_items_type_nm": "RED CELLS",
    "blb_blood_items_cel": "R",
    "blb_blood_items_plt": null,
    "blb_blood_items_pls": null,
    "blb_blood_items_age": 21,
    "blb_bag_type_id": 6,
    "blb_blood_items_id": 3,
    "blb_centrifuge_id": 1,
    "hos_guid": null
  }
]
```
