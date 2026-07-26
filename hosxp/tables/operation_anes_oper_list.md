# `operation_anes_oper_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_oper_list_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| operation_anes_oper_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(9) | YES |  | NULL |  |  |
| operation_anes_oper_begin_datetime | datetime | YES |  | NULL |  |  |
| operation_anes_oper_end_datetime | datetime | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| begin_datetime | datetime | YES |  | NULL |  |  |
| end_datetime | datetime | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| ref_key | varchar(50) | YES |  | NULL |  |  |
| ref_type | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_id | operation_id | no | 1 |
| PRIMARY | operation_anes_oper_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "operation_anes_oper_list_id": 1,
    "operation_id": 5,
    "operation_anes_oper_id": 5,
    "doctor": null,
    "operation_anes_oper_begin_datetime": "2009-11-25 00:00:00",
    "operation_anes_oper_end_datetime": "2009-11-25 00:00:00",
    "price": 500.0,
    "opi_guid": "{15CE7D71-A845-4933-B602-1489828629BA}",
    "qty": 1,
    "icode": "3110141",
    "hos_guid": "{3A111E9E-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  },
  {
    "operation_anes_oper_list_id": 3,
    "operation_id": 10,
    "operation_anes_oper_id": 5,
    "doctor": null,
    "operation_anes_oper_begin_datetime": null,
    "operation_anes_oper_end_datetime": null,
    "price": 500.0,
    "opi_guid": "{B4980B8F-E5B3-4DE3-8601-2CF9B367885F}",
    "qty": 1,
    "icode": "3110141",
    "hos_guid": "{3A1120BA-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  },
  {
    "operation_anes_oper_list_id": 4,
    "operation_id": 11,
    "operation_anes_oper_id": 1,
    "doctor": null,
    "operation_anes_oper_begin_datetime": "2009-11-26 00:00:00",
    "operation_anes_oper_end_datetime": "2009-11-26 00:00:00",
    "price": 1050.0,
    "opi_guid": "{CC5B45F1-2ADF-4123-A36A-FDB11D82E335}",
    "qty": 1,
    "icode": "3110137",
    "hos_guid": "{3A1121E6-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  },
  {
    "operation_anes_oper_list_id": 5,
    "operation_id": 13,
    "operation_anes_oper_id": 1,
    "doctor": null,
    "operation_anes_oper_begin_datetime": "2009-11-26 00:00:00",
    "operation_anes_oper_end_datetime": "2009-11-26 00:00:00",
    "price": 1050.0,
    "opi_guid": "{F9226F1F-976C-41C5-B57D-C70B0378ED82}",
    "qty": 1,
    "icode": "3110137",
    "hos_guid": "{3A112308-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  },
  {
    "operation_anes_oper_list_id": 7,
    "operation_id": 19,
    "operation_anes_oper_id": 3,
    "doctor": null,
    "operation_anes_oper_begin_datetime": "2009-11-27 00:00:00",
    "operation_anes_oper_end_datetime": "2009-11-27 00:00:00",
    "price": 175.0,
    "opi_guid": "{76CF20DF-3A54-45B5-860F-8E1A22F84B8D}",
    "qty": 1,
    "icode": "3110139",
    "hos_guid": "{3A112420-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  },
  {
    "operation_anes_oper_list_id": 8,
    "operation_id": 16,
    "operation_anes_oper_id": 1,
    "doctor": null,
    "operation_anes_oper_begin_datetime": "2009-11-27 00:00:00",
    "operation_anes_oper_end_datetime": "2009-11-27 00:00:00",
    "price": 1050.0,
    "opi_guid": "{AA8EF4E3-A9A7-4C13-B382-9EBDC68D8516}",
    "qty": 1,
    "icode": "3110137",
    "hos_guid": "{3A112542-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  },
  {
    "operation_anes_oper_list_id": 9,
    "operation_id": 16,
    "operation_anes_oper_id": 7,
    "doctor": null,
    "operation_anes_oper_begin_datetime": null,
    "operation_anes_oper_end_datetime": null,
    "price": 337.0,
    "opi_guid": "{133C272E-36EE-40BC-97A7-90A2EC00896A}",
    "qty": 1,
    "icode": "3150033",
    "hos_guid": "{3A11265A-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  },
  {
    "operation_anes_oper_list_id": 10,
    "operation_id": 16,
    "operation_anes_oper_id": 8,
    "doctor": null,
    "operation_anes_oper_begin_datetime": null,
    "operation_anes_oper_end_datetime": null,
    "price": 300.0,
    "opi_guid": "{EC68A93D-BDFA-4E93-83E7-3B8EA0EB4D99}",
    "qty": 1,
    "icode": "3150034",
    "hos_guid": "{3A112772-F61C-11DE-BFF4-00215E472B30}",
    "begin_datetime": null,
    "end_datetime": null,
    "total_price": null,
    "ref_key": null,
    "ref_type": null
  }
]
```
