# `psychiatric_estimate_iadl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_iadl_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_cant_walk | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_self_wheelchair | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_need_helper | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_can_walk | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_cant_cook | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_help_cook | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_can_cook | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_cant_clean | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_can_clean | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_cant_payment | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_can_payment | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_cant_bus | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_help_bus | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_can_bus | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_date | datetime | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_number | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_walk | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_walk_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_cook | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_cook_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_clean | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_clean_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_payment | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_payment_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_bus | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_bus_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_iadl_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_iadl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psychiatric_estimate_iadl_id": 1,
    "vn": "571020060000",
    "an": "",
    "psychiatric_estimate_iadl_cant_walk": null,
    "psychiatric_estimate_iadl_self_wheelchair": null,
    "psychiatric_estimate_iadl_need_helper": null,
    "psychiatric_estimate_iadl_can_walk": null,
    "psychiatric_estimate_iadl_cant_cook": null,
    "psychiatric_estimate_iadl_help_cook": null,
    "psychiatric_estimate_iadl_can_cook": null,
    "psychiatric_estimate_iadl_cant_clean": null,
    "psychiatric_estimate_iadl_can_clean": null,
    "psychiatric_estimate_iadl_cant_payment": null,
    "psychiatric_estimate_iadl_can_payment": null,
    "psychiatric_estimate_iadl_cant_bus": null,
    "psychiatric_estimate_iadl_help_bus": null,
    "psychiatric_estimate_iadl_can_bus": null,
    "psychiatric_estimate_iadl_date": "2014-10-20 00:00:00",
    "psychiatric_estimate_iadl_number": 1,
    "psychiatric_estimate_iadl_point": null,
    "psychiatric_estimate_iadl_walk": "3",
    "psychiatric_estimate_iadl_walk_point": 0,
    "psychiatric_estimate_iadl_cook": "1",
    "psychiatric_estimate_iadl_cook_point": null,
    "psychiatric_estimate_iadl_clean": "0",
    "psychiatric_estimate_iadl_clean_point": null,
    "psychiatric_estimate_iadl_payment": "1",
    "psychiatric_estimate_iadl_payment_point": null,
    "psychiatric_estimate_iadl_bus": "2",
    "psychiatric_estimate_iadl_bus_point": null,
    "psychiatric_estimate_iadl_staff": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_iadl_id": 2,
    "vn": "571021060000",
    "an": "",
    "psychiatric_estimate_iadl_cant_walk": null,
    "psychiatric_estimate_iadl_self_wheelchair": null,
    "psychiatric_estimate_iadl_need_helper": null,
    "psychiatric_estimate_iadl_can_walk": null,
    "psychiatric_estimate_iadl_cant_cook": null,
    "psychiatric_estimate_iadl_help_cook": null,
    "psychiatric_estimate_iadl_can_cook": null,
    "psychiatric_estimate_iadl_cant_clean": null,
    "psychiatric_estimate_iadl_can_clean": null,
    "psychiatric_estimate_iadl_cant_payment": null,
    "psychiatric_estimate_iadl_can_payment": null,
    "psychiatric_estimate_iadl_cant_bus": null,
    "psychiatric_estimate_iadl_help_bus": null,
    "psychiatric_estimate_iadl_can_bus": null,
    "psychiatric_estimate_iadl_date": "2014-10-21 00:00:00",
    "psychiatric_estimate_iadl_number": 2,
    "psychiatric_estimate_iadl_point": null,
    "psychiatric_estimate_iadl_walk": "3",
    "psychiatric_estimate_iadl_walk_point": null,
    "psychiatric_estimate_iadl_cook": "2",
    "psychiatric_estimate_iadl_cook_point": null,
    "psychiatric_estimate_iadl_clean": "1",
    "psychiatric_estimate_iadl_clean_point": null,
    "psychiatric_estimate_iadl_payment": "1",
    "psychiatric_estimate_iadl_payment_point": null,
    "psychiatric_estimate_iadl_bus": "2",
    "psychiatric_estimate_iadl_bus_point": null,
    "psychiatric_estimate_iadl_staff": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_iadl_id": 3,
    "vn": "571022083059",
    "an": "",
    "psychiatric_estimate_iadl_cant_walk": null,
    "psychiatric_estimate_iadl_self_wheelchair": null,
    "psychiatric_estimate_iadl_need_helper": null,
    "psychiatric_estimate_iadl_can_walk": null,
    "psychiatric_estimate_iadl_cant_cook": null,
    "psychiatric_estimate_iadl_help_cook": null,
    "psychiatric_estimate_iadl_can_cook": null,
    "psychiatric_estimate_iadl_cant_clean": null,
    "psychiatric_estimate_iadl_can_clean": null,
    "psychiatric_estimate_iadl_cant_payment": null,
    "psychiatric_estimate_iadl_can_payment": null,
    "psychiatric_estimate_iadl_cant_bus": null,
    "psychiatric_estimate_iadl_help_bus": null,
    "psychiatric_estimate_iadl_can_bus": null,
    "psychiatric_estimate_iadl_date": "2014-10-22 00:00:00",
    "psychiatric_estimate_iadl_number": 3,
    "psychiatric_estimate_iadl_point": null,
    "psychiatric_estimate_iadl_walk": "3",
    "psychiatric_estimate_iadl_walk_point": null,
    "psychiatric_estimate_iadl_cook": "2",
    "psychiatric_estimate_iadl_cook_point": null,
    "psychiatric_estimate_iadl_clean": "1",
    "psychiatric_estimate_iadl_clean_point": null,
    "psychiatric_estimate_iadl_payment": "1",
    "psychiatric_estimate_iadl_payment_point": null,
    "psychiatric_estimate_iadl_bus": "2",
    "psychiatric_estimate_iadl_bus_point": null,
    "psychiatric_estimate_iadl_staff": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_iadl_id": 5,
    "vn": "571024060000",
    "an": "",
    "psychiatric_estimate_iadl_cant_walk": null,
    "psychiatric_estimate_iadl_self_wheelchair": null,
    "psychiatric_estimate_iadl_need_helper": null,
    "psychiatric_estimate_iadl_can_walk": null,
    "psychiatric_estimate_iadl_cant_cook": null,
    "psychiatric_estimate_iadl_help_cook": null,
    "psychiatric_estimate_iadl_can_cook": null,
    "psychiatric_estimate_iadl_cant_clean": null,
    "psychiatric_estimate_iadl_can_clean": null,
    "psychiatric_estimate_iadl_cant_payment": null,
    "psychiatric_estimate_iadl_can_payment": null,
    "psychiatric_estimate_iadl_cant_bus": null,
    "psychiatric_estimate_iadl_help_bus": null,
    "psychiatric_estimate_iadl_can_bus": null,
    "psychiatric_estimate_iadl_date": "2014-10-24 00:00:00",
    "psychiatric_estimate_iadl_number": 5,
    "psychiatric_estimate_iadl_point": null,
    "psychiatric_estimate_iadl_walk": "3",
    "psychiatric_estimate_iadl_walk_point": 0,
    "psychiatric_estimate_iadl_cook": "2",
    "psychiatric_estimate_iadl_cook_point": null,
    "psychiatric_estimate_iadl_clean": "1",
    "psychiatric_estimate_iadl_clean_point": null,
    "psychiatric_estimate_iadl_payment": "1",
    "psychiatric_estimate_iadl_payment_point": null,
    "psychiatric_estimate_iadl_bus": "2",
    "psychiatric_estimate_iadl_bus_point": null,
    "psychiatric_estimate_iadl_staff": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_iadl_id": 6,
    "vn": "571029060000",
    "an": "",
    "psychiatric_estimate_iadl_cant_walk": null,
    "psychiatric_estimate_iadl_self_wheelchair": null,
    "psychiatric_estimate_iadl_need_helper": null,
    "psychiatric_estimate_iadl_can_walk": null,
    "psychiatric_estimate_iadl_cant_cook": null,
    "psychiatric_estimate_iadl_help_cook": null,
    "psychiatric_estimate_iadl_can_cook": null,
    "psychiatric_estimate_iadl_cant_clean": null,
    "psychiatric_estimate_iadl_can_clean": null,
    "psychiatric_estimate_iadl_cant_payment": null,
    "psychiatric_estimate_iadl_can_payment": null,
    "psychiatric_estimate_iadl_cant_bus": null,
    "psychiatric_estimate_iadl_help_bus": null,
    "psychiatric_estimate_iadl_can_bus": null,
    "psychiatric_estimate_iadl_date": "2014-10-29 00:00:00",
    "psychiatric_estimate_iadl_number": 6,
    "psychiatric_estimate_iadl_point": null,
    "psychiatric_estimate_iadl_walk": "3",
    "psychiatric_estimate_iadl_walk_point": null,
    "psychiatric_estimate_iadl_cook": "2",
    "psychiatric_estimate_iadl_cook_point": null,
    "psychiatric_estimate_iadl_clean": "1",
    "psychiatric_estimate_iadl_clean_point": null,
    "psychiatric_estimate_iadl_payment": "1",
    "psychiatric_estimate_iadl_payment_point": null,
    "psychiatric_estimate_iadl_bus": "2",
    "psychiatric_estimate_iadl_bus_point": null,
    "psychiatric_estimate_iadl_staff": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_iadl_id": 7,
    "vn": "571103060000",
    "an": "",
    "psychiatric_estimate_iadl_cant_walk": null,
    "psychiatric_estimate_iadl_self_wheelchair": null,
    "psychiatric_estimate_iadl_need_helper": null,
    "psychiatric_estimate_iadl_can_walk": null,
    "psychiatric_estimate_iadl_cant_cook": null,
    "psychiatric_estimate_iadl_help_cook": null,
    "psychiatric_estimate_iadl_can_cook": null,
    "psychiatric_estimate_iadl_cant_clean": null,
    "psychiatric_estimate_iadl_can_clean": null,
    "psychiatric_estimate_iadl_cant_payment": null,
    "psychiatric_estimate_iadl_can_payment": null,
    "psychiatric_estimate_iadl_cant_bus": null,
    "psychiatric_estimate_iadl_help_bus": null,
    "psychiatric_estimate_iadl_can_bus": null,
    "psychiatric_estimate_iadl_date": "2014-11-03 00:00:00",
    "psychiatric_estimate_iadl_number": 7,
    "psychiatric_estimate_iadl_point": null,
    "psychiatric_estimate_iadl_walk": "3",
    "psychiatric_estimate_iadl_walk_point": null,
    "psychiatric_estimate_iadl_cook": "2",
    "psychiatric_estimate_iadl_cook_point": null,
    "psychiatric_estimate_iadl_clean": "0",
    "psychiatric_estimate_iadl_clean_point": null,
    "psychiatric_estimate_iadl_payment": "1",
    "psychiatric_estimate_iadl_payment_point": null,
    "psychiatric_estimate_iadl_bus": "2",
    "psychiatric_estimate_iadl_bus_point": null,
    "psychiatric_estimate_iadl_staff": "[MASKED_FULLNAME]",
    "hos_guid": null
  }
]
```
