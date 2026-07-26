# `blb_donation_association`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_donation_association_id | int(11) | NO | PRI | 0 |  |  |
| blb_donation_association_name | varchar(100) | YES |  | NULL |  |  |
| blb_donation_association_code | varchar(5) | YES |  | NULL |  |  |
| blb_blood_reg_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_blood_reg_type_id | blb_blood_reg_type_id | no | 1 |
| PRIMARY | blb_donation_association_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_donation_association_id": 1,
    "blb_donation_association_name": "เหล่ากาชาดจังหวัดกระบี่",
    "blb_donation_association_code": "107",
    "blb_blood_reg_type_id": null
  },
  {
    "blb_donation_association_id": 2,
    "blb_donation_association_name": "โรงพยาบาลรามาธิบดี",
    "blb_donation_association_code": "146",
    "blb_blood_reg_type_id": null
  },
  {
    "blb_donation_association_id": 3,
    "blb_donation_association_name": "เหล่ากาชาดจังหวัดกาญจนบุรี",
    "blb_donation_association_code": "179",
    "blb_blood_reg_type_id": null
  },
  {
    "blb_donation_association_id": 4,
    "blb_donation_association_name": "โรงพยาบาลมะการักษ์",
    "blb_donation_association_code": "185",
    "blb_blood_reg_type_id": null
  },
  {
    "blb_donation_association_id": 5,
    "blb_donation_association_name": "เหล่ากาชาดจังหวัดกาฬสินธุ์",
    "blb_donation_association_code": "158",
    "blb_blood_reg_type_id": null
  },
  {
    "blb_donation_association_id": 6,
    "blb_donation_association_name": "เหล่ากาชาดจังหวัดกำแพงเพชร",
    "blb_donation_association_code": "147",
    "blb_blood_reg_type_id": null
  },
  {
    "blb_donation_association_id": 7,
    "blb_donation_association_name": "โรงพยาบาลคลองขลุง",
    "blb_donation_association_code": "193",
    "blb_blood_reg_type_id": null
  },
  {
    "blb_donation_association_id": 8,
    "blb_donation_association_name": "โรงพยาบาลขาณุวรลักษบุรี",
    "blb_donation_association_code": "108",
    "blb_blood_reg_type_id": null
  }
]
```
