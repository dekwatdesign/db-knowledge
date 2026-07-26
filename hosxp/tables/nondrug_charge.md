# `nondrug_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nondrug_chage_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| charge_money | double(15,3) | YES |  | NULL |  |  |
| charge_icode | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_icode_pttype | icode | no | 1 |
| ix_ix_icode_pttype | pttype | no | 2 |
| PRIMARY | nondrug_chage_id | yes | 1 |
| pttype | pttype | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nondrug_chage_id": 4,
    "icode": "3000094",
    "pttype": "02",
    "charge_money": 20.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  },
  {
    "nondrug_chage_id": 11,
    "icode": "3000129",
    "pttype": "02",
    "charge_money": 10.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  },
  {
    "nondrug_chage_id": 12,
    "icode": "3000131",
    "pttype": "02",
    "charge_money": 150.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  },
  {
    "nondrug_chage_id": 13,
    "icode": "3000157",
    "pttype": "02",
    "charge_money": 20.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  },
  {
    "nondrug_chage_id": 15,
    "icode": "3000153",
    "pttype": "02",
    "charge_money": 30.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  },
  {
    "nondrug_chage_id": 16,
    "icode": "3000174",
    "pttype": "02",
    "charge_money": 50.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  },
  {
    "nondrug_chage_id": 17,
    "icode": "3000134",
    "pttype": "02",
    "charge_money": 50.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  },
  {
    "nondrug_chage_id": 18,
    "icode": "3000297",
    "pttype": "02",
    "charge_money": 50.0,
    "charge_icode": "3000305",
    "hos_guid": ""
  }
]
```
