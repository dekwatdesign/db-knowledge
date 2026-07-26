# `drugitems_tmt_tpu_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_tmt_tpu_list_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| tpu_code | varchar(10) | YES |  | NULL |  |  |
| active_status | char(1) | YES | MUL | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| ix_icode_act | icode | no | 1 |
| ix_icode_act | active_status | no | 2 |
| ix_icode_act_index | active_status | no | 1 |
| ix_icode_act_index | icode | no | 2 |
| ix_icode_code | icode | yes | 1 |
| ix_icode_code | tpu_code | yes | 2 |
| PRIMARY | drugitems_tmt_tpu_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_tmt_tpu_list_id": 4,
    "icode": "1620003",
    "tpu_code": "123645",
    "active_status": "Y",
    "unit_price": null
  },
  {
    "drugitems_tmt_tpu_list_id": 5,
    "icode": "1000051",
    "tpu_code": "844986",
    "active_status": "Y",
    "unit_price": null
  },
  {
    "drugitems_tmt_tpu_list_id": 6,
    "icode": "1000141",
    "tpu_code": "321619",
    "active_status": "Y",
    "unit_price": null
  },
  {
    "drugitems_tmt_tpu_list_id": 7,
    "icode": "1610043",
    "tpu_code": "1025175",
    "active_status": "Y",
    "unit_price": null
  },
  {
    "drugitems_tmt_tpu_list_id": 8,
    "icode": "1620005",
    "tpu_code": "845477",
    "active_status": "Y",
    "unit_price": null
  },
  {
    "drugitems_tmt_tpu_list_id": 9,
    "icode": "1620007",
    "tpu_code": "1039361",
    "active_status": "Y",
    "unit_price": null
  },
  {
    "drugitems_tmt_tpu_list_id": 10,
    "icode": "1620009",
    "tpu_code": "1039414",
    "active_status": "Y",
    "unit_price": null
  },
  {
    "drugitems_tmt_tpu_list_id": 11,
    "icode": "1620014",
    "tpu_code": "670697",
    "active_status": "Y",
    "unit_price": null
  }
]
```
