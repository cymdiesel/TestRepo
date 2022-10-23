import contactModel from '../models/contact.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayContactList(req, res, next){
    contactModel.find(function(err, contactCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'bcontact/list', contact: contactCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayContactAddPage(req, res, next){
    res.render('index', {title: 'Add Contact', page: 'bcontact/edit', displayName: UserDisplayName(req), contact: {}});
}


export function ProcessContactAddPage(req, res, next){
    
    let newContact = contactModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        title: req.body.title,
        company: req.body.company
    });

    contactModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function DisplayContactEditPage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Contact List', page: 'bcontact/edit', displayName: UserDisplayName(req), contact: contact});
    });

}

export function ProcessContactEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        title: req.body.title,
        company: req.body.company
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function ProcessContactDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}

